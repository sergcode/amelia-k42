$(document).ready(function () {

  var phoneHorizontal = $('#applicationFormPhone');
  var phoneVertical = $('#formVerticalPhone');
  var phoneStocks = $('#formStocksPhone');
  var customerStocks = $('#customerRetentionPhone');
  var emailVertical = $('#formVerticalEmail');

  // var footerPhone = $('#validationTooltipPhone');
  // var footerEmail = $('#validationTooltipEmail');
  //
  // var footerImportantPhone = $('#validationImportantPhone');
  // var footerImportantEmail = $('#validationImportantEmail');

  $([phoneHorizontal, phoneVertical, phoneStocks, customerStocks]).inputmask('+7 (999) 999-9999');
  $([emailVertical]).inputmask({
    mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    greedy: false,
    onBeforePaste: function (pastedValue, opts) {
      pastedValue = pastedValue.toLowerCase();
      return pastedValue.replace("mailto:", "");
    },
    definitions: {
      '*': {
        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
        casing: "lower"
      }
    }
  });
});


