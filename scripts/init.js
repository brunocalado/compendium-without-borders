const moduleName = 'compendium-without-borders';
import { cwb } from './api.js'

Hooks.once('init', function() {
  // --------------------------------------------------
  // Load API
  game.modules.get(moduleName).api = { cwb }; // Request with: const cwb = game.modules.get('compendium-without-borders')?.api.cwb;
  
});

