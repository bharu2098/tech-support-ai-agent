export const getBrowserDeviceInfo = () => {
  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    cpuCores: navigator.hardwareConcurrency || "Unknown",
    language: navigator.language,
  };
};