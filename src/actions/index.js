export const DISPLAY_KEY = 'display_key';
export const SWITCH_POWER = 'switch_power';
export const PLAY_SOUND = 'play_sound';

export function displayKey(id) {
  return {
    type: DISPLAY_KEY,
    payload: id
  }
}

export function switchPower(powerState) {
  if (powerState === 'on') {
    return {
      type: SWITCH_POWER,
      payload: 'off'
    }
  } else {
    return {
      type: SWITCH_POWER,
      payload: 'on'
    }
  }
}

export function playSound(name) {

  var myAudio= document.getElementById(name)
  if (myAudio.paused) {
    myAudio.play();
  }else{
    myAudio.currentTime = 0
  }

  return {
    type: PLAY_SOUND,
    payload: name
  }
}
