/**
 * Parse profile.
 *
 * @param {Object|String} json
 * @return {Object}
 * @api private
 */
exports.parse = function(json) {
  if ('string' == typeof json) {
    json = JSON.parse(json);
  }
  
  var profile = {};
  profile.id = json.account_id;
  profile.displayName = json.display_name;
  profile.username = json.nickname;
  profile.profileImage = json.links.avatar.href;

  return profile;
};
