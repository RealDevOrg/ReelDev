// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
// In the preload script.
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
    takeScreenshot: (screenshot: string) => ipcRenderer.invoke('takeScreenshot', screenshot),
    takePhoto: (photo: string) => ipcRenderer.invoke('takePhoto', photo)

})
