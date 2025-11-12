function FindProxyForURL(url, host) {
  if (isPlainHostName(host)) { return "DIRECT"; }
  return "PROXY 195.26.246.86:8118; DIRECT";
}
