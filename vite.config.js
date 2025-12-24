import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// ES-модульный способ получить __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
	plugins: [
		react({
			fastRefresh: true, // React Fast Refresh
			// Пока отключаем SWC styled-components плагин, чтобы не падал на macOS
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'), // Удобный alias
		},
	},
	server: {
		port: 5173, // фиксированный порт
		strictPort: false, // если порт занят, выберет следующий
		watch: {
			usePolling: true, // чтобы macOS корректно ловила изменения
			interval: 100, // интервал опроса файловой системы
			ignored: ['**/node_modules/**', '**/dist/**', '**/public/**'],
		},
	},
});
