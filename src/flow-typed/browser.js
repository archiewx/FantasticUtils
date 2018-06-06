declare type BrowserType = {
  name: string,
  inspecter: string,
  engine?: string
}
declare type Environment = {
  os: string,
  osVersion?: string,
  cpu?: string,
  browser?: string,
  engine?: string | null
}
