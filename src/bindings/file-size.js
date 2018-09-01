import ko from 'knockout';

export default {

  update: function (element, valueAccessor, allBindingsAccessor, viewModel, context) {

    var text = getFormattedFileSize(ko.utils.unwrapObservable(valueAccessor()));

    ko.bindingHandlers.text.update(
      element,
      function () { return text; },
      allBindingsAccessor,
      viewModel,
      context);
  }

};

// Export this function so unit tests can be written against it directly
export function getFormattedFileSize(bytes) {

  if (bytes === 1) {
    return "1 Byte";
  }

  if (bytes < 1024) {
    return bytes + " Bytes";
  }

  if (bytes < 1048576) {
    return roundDownToOneDp((bytes / 1024)) + " KB";
  }

  if (bytes < 1073741824) {
    return roundDownToOneDp((bytes / 1048576)) + " MB";
  }

  return roundDownToOneDp((bytes / 1073741824)) + " GB";
}

function roundDownToOneDp(number) {
  number = number * 10;
  number = Math.floor(number);
  number = number / 10;

  return number.toFixed(1);
}
