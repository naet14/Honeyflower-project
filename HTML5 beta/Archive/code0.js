gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDrockObjects1= [];
gdjs.Untitled_32sceneCode.GDrockObjects2= [];
gdjs.Untitled_32sceneCode.GDGroundObjects1= [];
gdjs.Untitled_32sceneCode.GDGroundObjects2= [];
gdjs.Untitled_32sceneCode.GDMainCharacterObjects1= [];
gdjs.Untitled_32sceneCode.GDMainCharacterObjects2= [];
gdjs.Untitled_32sceneCode.GDCastleWallObjects1= [];
gdjs.Untitled_32sceneCode.GDCastleWallObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Untitled_32sceneCode.GDMainCharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i].getBehavior("PlatformerObject").getCurrentSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[k] = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDMainCharacterObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Untitled_32sceneCode.GDMainCharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i].getBehavior("PlatformerObject").getCurrentSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[k] = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDMainCharacterObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Untitled_32sceneCode.GDMainCharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[k] = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[k] = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDMainCharacterObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Untitled_32sceneCode.GDMainCharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[k] = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[k] = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDMainCharacterObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Untitled_32sceneCode.GDMainCharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[k] = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDMainCharacterObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i].getBehavior("Animation").setAnimationName("Jump");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Untitled_32sceneCode.GDMainCharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[k] = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDMainCharacterObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i].getBehavior("Animation").setAnimationName("Fall");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainCharacter"), gdjs.Untitled_32sceneCode.GDMainCharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[k] = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDMainCharacterObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMainCharacterObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDrockObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDrockObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMainCharacterObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCastleWallObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCastleWallObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDrockObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDrockObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMainCharacterObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMainCharacterObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCastleWallObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCastleWallObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
