import op from "open";
import isRunning from "is-running";

let pid;

export async function open() {
  if (!isRunning(pid)) {
    const p = await op(
      `${process.env.ProgramFiles}\\qBittorrent\\qbittorrent.exe`
    );
    pid = p.pid;
  }

  return pid;
}
