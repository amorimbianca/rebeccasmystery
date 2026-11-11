/**
 * Rebecca's Mystery — Sintetizador de Áudio Ambiente (Web Audio API)
 * Cria uma paisagem sonora sutil, misteriosa e cinematográfica
 * sem depender de arquivos pesados externos.
 */

class AmbientSoundEngine {
  constructor() {
    this.audioCtx = null;
    this.masterGain = null;
    this.isPlaying = false;
    this.oscillators = [];
    this.filter = null;
    this.noiseNode = null;
  }

  init() {
    if (this.audioCtx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new AudioContext();

    // Master Gain
    this.masterGain = this.audioCtx.createGain();
    this.masterGain.gain.setValueAtTime(0, this.audioCtx.currentTime);

    // Filtro Passa-Baixa suave para criar um som abafado e sombrio
    this.filter = this.audioCtx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(320, this.audioCtx.currentTime);

    this.filter.connect(this.masterGain);
    this.masterGain.connect(this.audioCtx.destination);
  }

  start() {
    this.init();
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    // Frequências para o acorde escuro da Saint Claire (Dó menor / Ré menor sutil)
    const frequencies = [73.42, 110.00, 146.83, 220.00]; // D2, A2, D3, A3

    frequencies.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const oscGain = this.audioCtx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq + (Math.random() * 0.5 - 0.25), this.audioCtx.currentTime);

      // Leve LFO para oscilação lenta
      const lfo = this.audioCtx.createOscillator();
      const lfoGain = this.audioCtx.createGain();
      lfo.frequency.setValueAtTime(0.08 + idx * 0.02, this.audioCtx.currentTime);
      lfoGain.gain.setValueAtTime(1.5, this.audioCtx.currentTime);
      lfo.connect(osc.frequency);
      lfo.start();

      oscGain.gain.setValueAtTime(0.06 / (idx + 1), this.audioCtx.currentTime);

      osc.connect(oscGain);
      oscGain.connect(this.filter);
      osc.start();

      this.oscillators.push(osc, lfo);
    });

    // Fade-in suave de 2.5 segundos
    this.masterGain.gain.cancelScheduledValues(this.audioCtx.currentTime);
    this.masterGain.gain.setValueAtTime(0, this.audioCtx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(0.18, this.audioCtx.currentTime + 2.5);

    this.isPlaying = true;
  }

  stop() {
    if (!this.audioCtx || !this.isPlaying) return;

    // Fade-out suave de 1.2 segundos
    this.masterGain.gain.cancelScheduledValues(this.audioCtx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + 1.2);

    setTimeout(() => {
      this.oscillators.forEach(node => {
        try { node.stop(); node.disconnect(); } catch (e) {}
      });
      this.oscillators = [];
      this.isPlaying = false;
    }, 1300);
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

window.ambientSound = new AmbientSoundEngine();
