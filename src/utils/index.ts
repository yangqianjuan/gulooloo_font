export const iosLink =
  "https://apps.apple.com/us/developer/gulooloo-tech/id1574018169";
export const andoridLink =
  "https://play.google.com/store/apps/dev?id=4626225608014895570";
export const otherlink =
  "https://play.google.com/store/apps/dev?id=4626225608014895570";

export const iosLink_easy_notes =
  "https://apps.apple.com/us/app/easynotes-note-taking-apps/id6450029780";
export const andoridLink_easy_notes =
  "https://play.google.com/store/apps/details?id=easynotes.notes.notepad.notebook.privatenotes.note";

export const iosLink_invoice_now =
  "https://apps.apple.com/us/app/invoice-now-invoice-maker-app/id1614431204";
export const andoridLink_invoice_now =
  "https://play.google.com/store/apps/details?id=invoice.invoicemaker.estimatemaker.billingapp";

export const iosLink_go_fasting =
  "https://apps.apple.com/us/app/gofasting-intermittent-fasting/id6504045139";
export const andoridLink_go_fasting =
  "https://play.google.com/store/apps/details?id=gofasting.fastingtracker.fasting.intermittentfasting";

export const iosLink_qr_generator =
  "https://apps.apple.com/us/app/qr-code-generator-qr-maker/id1574018167";
export const andoridLink_qr_generator =
  "https://play.google.com/store/apps/details?id=barcodegenerator.barcodecreator.barcodemaker.barcodescanner";

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
