var module358 = require('./358'),
  module18 = require('./18'),
  t = {
    canRecordVideos: function (o) {
      module18.default(module358.default, 'ImagePickerIOS is not available');
      return module358.default.canRecordVideos(o);
    },
    canUseCamera: function (o) {
      module18.default(module358.default, 'ImagePickerIOS is not available');
      return module358.default.canUseCamera(o);
    },
    openCameraDialog: function (o, t, u) {
      module18.default(module358.default, 'ImagePickerIOS is not available');
      var s = {
        videoMode: true,
        unmirrorFrontFacingCamera: false,
      };
      if (null != o.videoMode) s.videoMode = o.videoMode;
      if (null != o.unmirrorFrontFacingCamera) s.unmirrorFrontFacingCamera = o.unmirrorFrontFacingCamera;
      return module358.default.openCameraDialog(s, t, u);
    },
    openSelectDialog: function (o, t, u) {
      module18.default(module358.default, 'ImagePickerIOS is not available');
      var s = {
        showImages: true,
        showVideos: false,
      };
      if (null != o.showImages) s.showImages = o.showImages;
      if (null != o.showVideos) s.showVideos = o.showVideos;
      return module358.default.openSelectDialog(s, t, u);
    },
  };

module.exports = t;
