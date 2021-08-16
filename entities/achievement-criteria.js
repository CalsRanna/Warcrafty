const t = require("../lib/types");

module.exports = {
  ID: t.int32le,
  Achievement_Id: t.int32le,
  Type: t.int32le,
  Asset_Id: t.int32le,
  Quantity: t.int32le,
  Start_Event: t.int32le,
  Start_Asset: t.int32le,
  Fail_Event: t.int32le,
  Fail_Asset: t.int32le,
  Description_Lang_enUS: t.string,
  Description_Lang_enGB: t.string,
  Description_Lang_deDE: t.string,
  Description_Lang_enCN: t.string,
  Description_Lang_zhCN: t.string,
  Description_Lang_enTW: t.string,
  Description_Lang_zhTW: t.string,
  Description_Lang_esES: t.string,
  Description_Lang_esMX: t.string,
  Description_Lang_koKR: t.string,
  Description_Lang_frFR: t.string,
  Description_Lang_ruRU: t.string,
  Description_Lang_ptPT: t.string,
  Description_Lang_ptBR: t.string,
  Description_Lang_itIT: t.string,
  Description_Lang_Unk: t.string,
  Description_Lang_Mask: t.int32le,
  Flags: t.int32le,
  Timer_Start_Event: t.int32le,
  Timer_Asset_Id: t.int32le,
  Timer_Time: t.int32le,
  Ui_Order: t.int32le,
};
