// (function () {
//   window.dataLayer = window.dataLayer || [];
//   var oldPush = window.dataLayer.push;
//   window.dataLayer.push = function () {
//     var states = [].slice.call(arguments, 0);

//     var containerId = 'GTM-M237278';
//     var dataModel = window.google_tag_manager[containerId].dataLayer.get({
//       split: function () {
//         return [];
//       },
//     });

//     var applyPush = oldPush.apply(window.dataLayer, states);

//     console.log(dataModel);

//     return applyPush;
//   };
// })();
