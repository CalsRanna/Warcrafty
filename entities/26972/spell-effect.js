const t = require("../../lib/types");

module.exports = {
  ID: t.uint32le,
  Effect: t.uint32le,
  EffectBasePoints: t.uint32le,
  EffectIndex: t.uint32le,
  EffectAura: t.uint32le,
  DifficultyID: t.uint32le,
  EffectAmplitude: t.uint32le,
  EffectAuraPeriod: t.uint32le,
  EffectBonusCoefficient: t.uint32le,
  EffectChainAmplitude: t.uint32le,
  EffectChainTargets: t.uint32le,
  EffectDieSides: t.uint32le,
  EffectItemType: t.uint32le,
  EffectMechanic: t.uint32le,
  EffectPointsPerResource: t.uint32le,
  EffectRealPointsPerLevel: t.uint32le,
  EffectTriggerSpell: t.uint32le,
  EffectPos_facing: t.uint32le,
  EffectAttributes: t.uint32le,
  BonusCoefficientFromAP: t.uint32le,
  PvpMultiplier: t.uint32le,
  Coefficient: t.uint32le,
  Variance: t.uint32le,
  ResourceCoefficient: t.uint32le,
  GroupSizeBasePointsCoefficient: t.uint32le,
  EffectSpellClassMask: t.uint32le,
  EffectMiscValue: t.uint32le,
  EffectRadiusIndex: t.uint32le,
  ImplicitTarget: t.uint32le,
};
