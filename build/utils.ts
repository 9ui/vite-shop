import fs from 'fs';
import path from 'path';
import { networkInterfaces } from 'os';
import dotenv from 'dotenv';
import chalk from 'chalk';

export interface ViteEnv {
  VITE_PORT: number;
  VITE_USE_MOCK: boolean;
  VITE_USE_PWA: boolean;
  VITE_PUBLIC_PATH: string;
  VITE_PROXY: [string, string][];
  VITE_GLOB_APP_TITLE: string;
  VITE_USE_CDN: boolean;
  VITE_DROP_CONSOLE: boolean;
  VITE_BUILD_GZIP: boolean;
}

/**
 * 读取所有环境变量的配置文件
 */
export function loadEnv(): ViteEnv {
  const env = process.env.NODE_ENV;
  const ret: any = {};
  const envList = [`.env.${env}.local`, `.env.${env}`, '.env.local', '.env', ,];
  envList.forEach((e) => {
    dotenv.config({
      path: e,
    });
  });

  for (const envName of Object.keys(process.env)) {
    let realName = (process.env as any)[envName].replace(/\\n/g, '\n');
    realName = realName === 'true' ? true : realName === 'false' ? false : realName;
    if (envName === 'VITE_PORT') {
      realName = Number(realName);
    }
    if (envName === 'VITE_PROXY') {
      try {
        realName = JSON.parse(realName);
      } catch (error) {}
    }
    ret[envName] = realName;
    process.env[envName] = realName;
  }
  return ret;
}

/**
 * 判断是否是开发环境
 */
export function isDevFn(): boolean {
  return process.env.NODE_ENV === 'development';
}
