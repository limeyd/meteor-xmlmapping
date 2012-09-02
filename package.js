Package.describe({
  summary: "Node XML Mapping packaged for Meteor"
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server']
  api.add_files('lib/xml-mapping/lib/xml-mapping.js', where);
});
