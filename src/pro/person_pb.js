/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var src_pro_date_pb = require('../../src/pro/date_pb.js');
goog.exportSymbol('proto.person.Person', null, global);
goog.exportSymbol('proto.person.Person.EyeColour', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.person.Person = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.person.Person.repeatedFields_, null);
};
goog.inherits(proto.person.Person, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.person.Person.displayName = 'proto.person.Person';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.person.Person.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.person.Person.prototype.toObject = function(opt_includeInstance) {
  return proto.person.Person.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.person.Person} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.person.Person.toObject = function(includeInstance, msg) {
  var f, obj = {
    age: jspb.Message.getFieldWithDefault(msg, 1, 0),
    firstName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    smallPicture: msg.getSmallPicture_asB64(),
    isProfileVerified: jspb.Message.getFieldWithDefault(msg, 5, false),
    height: +jspb.Message.getFieldWithDefault(msg, 6, 0.0),
    phoneNumbersList: jspb.Message.getRepeatedField(msg, 7),
    eyeColour: jspb.Message.getFieldWithDefault(msg, 8, 0),
    birthday: (f = msg.getBirthday()) && src_pro_date_pb.Date.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.person.Person}
 */
proto.person.Person.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.person.Person;
  return proto.person.Person.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.person.Person} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.person.Person}
 */
proto.person.Person.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAge(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSmallPicture(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsProfileVerified(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setHeight(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addPhoneNumbers(value);
      break;
    case 8:
      var value = /** @type {!proto.person.Person.EyeColour} */ (reader.readEnum());
      msg.setEyeColour(value);
      break;
    case 9:
      var value = new src_pro_date_pb.Date;
      reader.readMessage(value,src_pro_date_pb.Date.deserializeBinaryFromReader);
      msg.setBirthday(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.person.Person.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.person.Person.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.person.Person} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.person.Person.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAge();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSmallPicture_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getIsProfileVerified();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getPhoneNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getEyeColour();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getBirthday();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      src_pro_date_pb.Date.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.person.Person.EyeColour = {
  UNKNOWN_EYE_COLOUR: 0,
  EYE_GREEN: 1,
  EYE_BROWN: 2,
  EYE_BLUE: 3,
  EYE_GRAY: 4
};

/**
 * optional int32 age = 1;
 * @return {number}
 */
proto.person.Person.prototype.getAge = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.person.Person.prototype.setAge = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string first_name = 2;
 * @return {string}
 */
proto.person.Person.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.person.Person.prototype.setFirstName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string last_name = 3;
 * @return {string}
 */
proto.person.Person.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.person.Person.prototype.setLastName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bytes small_picture = 4;
 * @return {!(string|Uint8Array)}
 */
proto.person.Person.prototype.getSmallPicture = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes small_picture = 4;
 * This is a type-conversion wrapper around `getSmallPicture()`
 * @return {string}
 */
proto.person.Person.prototype.getSmallPicture_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSmallPicture()));
};


/**
 * optional bytes small_picture = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSmallPicture()`
 * @return {!Uint8Array}
 */
proto.person.Person.prototype.getSmallPicture_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSmallPicture()));
};


/** @param {!(string|Uint8Array)} value */
proto.person.Person.prototype.setSmallPicture = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional bool is_profile_verified = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.person.Person.prototype.getIsProfileVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.person.Person.prototype.setIsProfileVerified = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional float height = 6;
 * @return {number}
 */
proto.person.Person.prototype.getHeight = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.person.Person.prototype.setHeight = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * repeated string phone_numbers = 7;
 * @return {!Array<string>}
 */
proto.person.Person.prototype.getPhoneNumbersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/** @param {!Array<string>} value */
proto.person.Person.prototype.setPhoneNumbersList = function(value) {
  jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.person.Person.prototype.addPhoneNumbers = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


proto.person.Person.prototype.clearPhoneNumbersList = function() {
  this.setPhoneNumbersList([]);
};


/**
 * optional EyeColour eye_colour = 8;
 * @return {!proto.person.Person.EyeColour}
 */
proto.person.Person.prototype.getEyeColour = function() {
  return /** @type {!proto.person.Person.EyeColour} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {!proto.person.Person.EyeColour} value */
proto.person.Person.prototype.setEyeColour = function(value) {
  jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional my.date.Date birthday = 9;
 * @return {?proto.my.date.Date}
 */
proto.person.Person.prototype.getBirthday = function() {
  return /** @type{?proto.my.date.Date} */ (
    jspb.Message.getWrapperField(this, src_pro_date_pb.Date, 9));
};


/** @param {?proto.my.date.Date|undefined} value */
proto.person.Person.prototype.setBirthday = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.person.Person.prototype.clearBirthday = function() {
  this.setBirthday(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.person.Person.prototype.hasBirthday = function() {
  return jspb.Message.getField(this, 9) != null;
};


goog.object.extend(exports, proto.person);
