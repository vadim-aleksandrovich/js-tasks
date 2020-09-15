const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const k = 0.693 / HALF_LIFE_PERIOD;
module.exports = dateSample = (sampleActivity) => typeof(sampleActivity) == 'string' && 
                                                  parseFloat(sampleActivity) > 0 && 
                                                  parseFloat(sampleActivity) <= MODERN_ACTIVITY ? 
                                                  Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k) : 
                                                  false;