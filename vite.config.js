import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                login: resolve(__dirname, 'auth/login/Login.html'),
                register: resolve(__dirname, 'auth/register/Register.html'),
                code: resolve(__dirname, 'auth/code/Code.html'),
            },
        },
    },
});
