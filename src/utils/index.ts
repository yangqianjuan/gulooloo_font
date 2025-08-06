export const detectDeviceType = function () {
  const ua = navigator.userAgent;
  console.log(ua);
  if (/android/i.test(ua)) {
    return "Android";
  }

  if (/iPhone|iPad|iPod/i.test(ua)) {
    return "iOS";
  }

  if (/Windows/i.test(ua)) {
    return "Windows";
  }

  if (/Macintosh/i.test(ua)) {
    return "macOS";
  }

  return "Other";
};
