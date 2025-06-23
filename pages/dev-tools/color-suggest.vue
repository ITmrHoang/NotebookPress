<template>
  <div class="bg-gray-100 dark:bg-gray-900 min-h-screen">

    <div id="app" class="container mx-auto p-4 md:p-8 max-w-6xl">
        
        <header class="text-center mb-10">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Công cụ tìm cặp màu tương phản</h1>
            <p class="text-md md:text-lg text-gray-600 dark:text-gray-400 mt-2">Tích hợp trí tuệ nhân tạo Gemini để khám phá ý nghĩa màu sắc.</p>
        </header>

        <!-- Input Section -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-10 sticky top-4 z-10">
            <div class="flex flex-col sm:flex-row items-center justify-center flex-wrap gap-4 md:gap-6">
                <div class="flex items-center gap-3">
                    <label class="font-bold text-lg text-gray-700 dark:text-gray-300">Màu nền:</label>
                    <div class="relative flex items-center gap-3 bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
                         <input type="color" v-model="userInputColor" @input="debounceUpdate" class="color-input">
                         <input type="text" v-model.lazy="userInputColor" @change="updateColors" class="w-32 font-mono text-lg p-2 rounded-md bg-white dark:bg-gray-600 text-gray-800 dark:text-gray-200 border-2 border-transparent focus:border-blue-500 focus:outline-none">
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <label class="text-gray-700 dark:text-gray-300">Tỷ lệ:</label>
                    <span class="font-bold text-blue-600 dark:text-blue-400 w-12 text-center">{{ targetContrast.toFixed(1) }}:1</span>
                    <input type="range" min="3" max="12" step="0.1" v-model.number="targetContrast" @input="debounceUpdate" class="w-32 cursor-pointer">
                </div>
                 <div class="flex items-center gap-2">
                    <label class="text-gray-700 dark:text-gray-300">Lệch nền:</label>
                    <span class="font-bold text-blue-600 dark:text-blue-400 w-12 text-center">{{ bgHueDeviation }}°</span>
                    <input type="range" min="0" max="45" step="1" v-model.number="bgHueDeviation" @input="debounceUpdate" class="w-32 cursor-pointer">
                </div>
                 <div class="flex items-center gap-2">
                    <label class="text-gray-700 dark:text-gray-300">Lệch chữ:</label>
                    <span class="font-bold text-blue-600 dark:text-blue-400 w-12 text-center">{{ textHueDeviation }}°</span>
                    <input type="range" min="0" max="45" step="1" v-model.number="textHueDeviation" @input="debounceUpdate" class="w-32 cursor-pointer">
                </div>
            </div>
        </div>
        
        <!-- Selected Color & Gemini Action -->
        <div v-if="selectedSuggestion" class="mb-10 text-center">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-300 mb-4">Cặp màu đã chọn</h2>
            <div class="inline-block p-1 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <div class="w-64 h-24 rounded-lg flex items-center justify-center" :style="{backgroundColor: selectedSuggestion.bg}">
                    <span class="font-bold text-2xl" :style="{color: selectedSuggestion.text}">{{ selectedSuggestion.bg }}</span>
                </div>
            </div>
            <button @click="analyzeWithGemini" :disabled="isGeminiLoading" class="mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                <span v-if="!isGeminiLoading">✨ Phân Tích Cặp Màu</span>
                <span v-else class="flex items-center"><div class="gemini-loader"></div> Đang phân tích...</span>
            </button>
        </div>


        <!-- Results Section -->
        <div v-if="isLoading" class="flex justify-center items-center h-64">
            <div class="loader"></div>
        </div>

        <div v-if="!isLoading && suggestionRows.length > 0" class="space-y-8">
            <div v-for="(row, rowIndex) in suggestionRows" :key="rowIndex">
                 <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-300 mb-4">{{ row.title }}</h2>
                 <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                     <div v-for="(option, optionIndex) in row.options" :key="optionIndex" 
                          class="suggestion-card rounded-xl shadow-lg overflow-hidden flex flex-col" 
                          :class="{ 'selected': selectedSuggestion && selectedSuggestion.bg === option.bg && selectedSuggestion.text === option.text }"
                          @click="setSelected(option)">
                        <div class="h-28 flex items-center justify-center p-2 text-center" :style="{backgroundColor: option.bg}">
                            <p class="text-3xl font-bold" :style="{color: option.text}">Aa</p>
                        </div>
                        <div class="bg-white dark:bg-gray-800 p-3 flex-grow flex flex-col justify-between font-mono text-xs">
                             <div>
                                <p class="text-gray-600 dark:text-gray-400">Nền: {{ option.bg }}</p>
                                <p class="text-gray-600 dark:text-gray-400">Chữ: {{ option.text }}</p>
                           </div>
                            <p class="font-bold text-green-600 dark:text-green-400 mt-2">Tương phản: {{ option.contrast.toFixed(2) }}:1</p>
                        </div>
                     </div>
                 </div>
            </div>
        </div>

        <!-- Gemini Modal -->
        <div v-if="isGeminiModalOpen" class="gemini-modal-overlay" @click="isGeminiModalOpen = false">
            <div class="gemini-modal-content dark:bg-gray-800" @click.stop>
                 <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">✨ Phân Tích từ Gemini</h2>
                 <div v-if="geminiAnalysis.error" class="text-red-500">{{ geminiAnalysis.error }}</div>
                 <div v-else>
                     <h3 class="font-bold text-lg text-gray-800 dark:text-gray-200 mt-4 mb-2">Tên gợi ý cho cặp màu:</h3>
                     <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
                         <li v-for="name in geminiAnalysis.palette_names" :key="name">{{ name }}</li>
                     </ul>
                     <h3 class="font-bold text-lg text-gray-800 dark:text-gray-200 mt-4 mb-2">Mô tả & bối cảnh sử dụng:</h3>
                     <p class="text-gray-700 dark:text-gray-300">{{ geminiAnalysis.description }}</p>
                 </div>
                 <button @click="isGeminiModalOpen = false" class="mt-6 w-full py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">Đóng</button>
            </div>
        </div>

    </div>
  </div>
</template>

<script>
const colorUtils={hexToRgb(a){let e=0,t=0,o=0;return 4==a.length?(e=parseInt(a[1]+a[1],16),t=parseInt(a[2]+a[2],16),o=parseInt(a[3]+a[3],16)):7==a.length&&(e=parseInt(a[1]+a[2],16),t=parseInt(a[3]+a[4],16),o=parseInt(a[5]+a[6],16)),{r:e,g:t,b:o}},rgbToHex(a,e,t){return"#"+((1<<24)+(a<<16)+(e<<8)+t).toString(16).slice(1).toUpperCase()},getLuminance(a,e,t){const o=[a,e,t].map(a=>(a/=255)<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4));return.2126*o[0]+.7152*o[1]+.0722*o[2]},getContrast(a,e){const t=this.getLuminance(a.r,a.g,a.b),o=this.getLuminance(e.r,e.g,e.b);return(Math.max(t,o)+.05)/(Math.min(t,o)+.05)},rgbToHsl(a,e,t){a/=255,e/=255,t/=255;const o=Math.max(a,e,t),r=Math.min(a,e,t);let s,n,l=(o+r)/2;if(o==r)s=n=0;else{const i=o-r;switch(n=l>.5?i/(2-o-r):i/(o+r),o){case a:s=(e-t)/i+(e<t?6:0);break;case e:s=(t-a)/i+2;break;case t:s=(a-e)/i+4}s/=6}return{h:360*s,s:n,l:l}},hslToRgb(a,e,t){let o,r,s;if(a=(a%360+360)%360,a/=360,0==e)o=r=s=t;else{const n=(a,e,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*(2/3-t)*6:a),l=t<.5?t*(1+e):t+e-t*e,i=2*t-l;o=n(i,l,a+1/3),r=n(i,l,a),s=n(i,l,a-1/3)}return{r:Math.round(255*o),g:Math.round(255*r),b:Math.round(255*s)}},isValidHex(a){return/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(a)}};
export default {
            data: {
                userInputColor: '#A91C27',
                suggestionRows: [],
                selectedSuggestion: null,
                isLoading: false,
                targetContrast: 6.0,
                bgHueDeviation: 10,
                textHueDeviation: 15,
                debounceTimer: null,
                // Gemini related state
                isGeminiLoading: false,
                isGeminiModalOpen: false,
                geminiAnalysis: { palette_names: [], description: '', error: null }
            },
            methods: {
                findTextColorCandidates(bgRgb, count) {
                    const bgHsl = colorUtils.rgbToHsl(bgRgb.r, bgRgb.g, bgRgb.b);
                    const isDarkBg = bgHsl.l < 0.5;
                    const candidates = [];
                    const hueSeeds = [0, 60, 180, (bgHsl.h + 180) % 360, (bgHsl.h + 150) % 360, (bgHsl.h + 210) % 360];

                    for (const h of hueSeeds) {
                        let bestForHue = { contrast: 0 };
                         for (let s = 1.0; s > 0.3; s -= 0.15) {
                            const lStart = isDarkBg ? 0.6 : 0;
                            const lEnd = isDarkBg ? 1.0 : 0.45;
                            for (let l = lStart; l < lEnd; l += 0.05) {
                                const s_val = (h === 0) ? 0 : s;
                                const testRgb = colorUtils.hslToRgb(h, s_val, l);
                                const contrast = colorUtils.getContrast(bgRgb, testRgb);
                                if (contrast > bestForHue.contrast) {
                                    bestForHue = { hex: colorUtils.rgbToHex(testRgb.r, testRgb.g, testRgb.b), contrast, hue: h };
                                }
                            }
                        }
                        if (bestForHue.contrast > this.targetContrast) {
                            candidates.push(bestForHue);
                        }
                    }

                    return candidates.filter((v,i,a)=>a.findIndex(t=>(t.hex === v.hex))===i)
                                     .sort((a,b) => b.contrast - a.contrast)
                                     .slice(0, count);
                },

                generateDeviatedColors(baseHex, hueDeviation, count) {
                    const baseRgb = colorUtils.hexToRgb(baseHex);
                    const baseHsl = colorUtils.rgbToHsl(baseRgb.r, baseRgb.g, baseRgb.b);
                    const results = new Set();
                    if (hueDeviation === 0 && count === 1) return [baseHex];

                    while(results.size < count) {
                         const h_offset = (Math.random() * 2 - 1) * hueDeviation;
                         const l_offset = (Math.random() - 0.5) * 0.3;
                         const s_offset = (Math.random() - 0.5) * 0.3;
                         
                         const h = baseHsl.h + h_offset;
                         const s = Math.max(0.1, Math.min(1, baseHsl.s + s_offset));
                         const l = Math.max(0.1, Math.min(0.9, baseHsl.l + l_offset));
                         
                         const newRgb = colorUtils.hslToRgb(h, s, l);
                         results.add(colorUtils.rgbToHex(newRgb.r, newRgb.g, newRgb.b));
                    }
                    return Array.from(results);
                },

                updateColors() {
                    if (!colorUtils.isValidHex(this.userInputColor)) return;
                    this.isLoading = true;
                    this.selectedSuggestion = null; // Reset selection
                    
                    setTimeout(() => {
                        const rows = [];
                        const bgRgb = colorUtils.hexToRgb(this.userInputColor);
                        const bestTextColor = this.findTextColorCandidates(bgRgb, 1)[0];
                        if(!bestTextColor) { 
                            this.isLoading = false; 
                            this.suggestionRows = [];
                            return; 
                        }

                        // Set the first suggestion as the default selected one
                        this.setSelected({bg: this.userInputColor, text: bestTextColor.hex, contrast: bestTextColor.contrast});

                        rows.push({
                            title: "Tối ưu cho Nền Gốc",
                            options: this.findTextColorCandidates(bgRgb, 5).map(c => ({ bg: this.userInputColor, text: c.hex, contrast: c.contrast }))
                        });

                        const deviatedBgs = this.generateDeviatedColors(this.userInputColor, this.bgHueDeviation, 5);
                        rows.push({
                            title: "Các Nền Lân Cận",
                            options: deviatedBgs.map(bgHex => ({
                                bg: bgHex,
                                text: bestTextColor.hex,
                                contrast: colorUtils.getContrast(colorUtils.hexToRgb(bgHex), colorUtils.hexToRgb(bestTextColor.hex))
                            })).filter(o => o.contrast >= this.targetContrast)
                        });

                        const deviatedTexts = this.generateDeviatedColors(bestTextColor.hex, this.textHueDeviation, 5);
                         rows.push({
                            title: "Các Chữ Lân Cận",
                            options: deviatedTexts.map(textHex => ({
                                bg: this.userInputColor,
                                text: textHex,
                                contrast: colorUtils.getContrast(bgRgb, colorUtils.hexToRgb(textHex))
                            })).filter(o => o.contrast >= this.targetContrast)
                        });

                        const creativeBgs = this.generateDeviatedColors(this.userInputColor, this.bgHueDeviation + 20, 10);
                        const creativeTexts = this.generateDeviatedColors(bestTextColor.hex, this.textHueDeviation + 20, 10);
                        const creativeOptions = [];
                         for(let i=0; i<10; i++) {
                             const bg = creativeBgs[i] || this.userInputColor;
                             const text = creativeTexts[i] || bestTextColor.hex;
                             const contrast = colorUtils.getContrast(colorUtils.hexToRgb(bg), colorUtils.hexToRgb(text));
                             if(contrast >= this.targetContrast) {
                                creativeOptions.push({bg, text, contrast});
                             }
                         }
                         if(creativeOptions.length >= 5) {
                            rows.push({ title: "Kết hợp Sáng tạo 1", options: creativeOptions.slice(0, 5) });
                         }
                          if(creativeOptions.length >= 10) {
                            rows.push({ title: "Kết hợp Sáng tạo 2", options: creativeOptions.slice(5, 10) });
                         }
                        
                        this.suggestionRows = rows.filter(r => r.options && r.options.length > 0);
                        this.isLoading = false;
                    }, 50);
                },
                debounceUpdate() {
                    clearTimeout(this.debounceTimer);
                    this.debounceTimer = setTimeout(() => {
                        this.updateColors();
                    }, 250);
                },
                setSelected(option) {
                    this.selectedSuggestion = option;
                },
                async analyzeWithGemini() {
                    if (!this.selectedSuggestion) return;
                    this.isGeminiLoading = true;
                    this.isGeminiModalOpen = true;
                    this.geminiAnalysis = { palette_names: [], description: '', error: null };
                    
                    const { bg, text } = this.selectedSuggestion;
                    const prompt = `You are a design and branding expert. Given a background color and a text color, your task is to provide a creative analysis in Vietnamese. Background Color: ${bg}. Text Color: ${text}. Your response must be a JSON object with the structure: {"palette_names": ["name 1", "name 2", "name 3"], "description": "A description of the mood and ideal use cases."}. Please provide creative, evocative names and a concise, helpful description in Vietnamese.`;
                    
                    const payload = {
                        contents: [{ role: "user", parts: [{ text: prompt }] }],
                        generationConfig: {
                            responseMimeType: "application/json",
                            responseSchema: {
                                type: "OBJECT",
                                properties: {
                                    palette_names: { type: "ARRAY", items: { type: "STRING" } },
                                    description: { type: "STRING" },
                                },
                            },
                        },
                    };

                    const apiKey = "";
                    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

                    try {
                        const response = await fetch(apiUrl, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(payload)
                        });

                        if (!response.ok) {
                            throw new Error(`API Error: ${response.statusText}`);
                        }

                        const result = await response.json();
                        
                        if (result.candidates && result.candidates.length > 0) {
                            const analysisText = result.candidates[0].content.parts[0].text;
                            this.geminiAnalysis = JSON.parse(analysisText);
                        } else {
                            throw new Error("Không nhận được phân tích hợp lệ từ Gemini.");
                        }

                    } catch (error) {
                        console.error("Gemini API call failed:", error);
                        this.geminiAnalysis.error = "Đã có lỗi xảy ra khi phân tích. Vui lòng thử lại.";
                    } finally {
                        this.isGeminiLoading = false;
                    }
                }
            },
            mounted() {
                this.updateColors();
            }
        }
</script>

<style>
        body {
            font-family: 'Be Vietnam Pro', sans-serif;
        }
        .color-input {
            width: 50px;
            height: 50px;
            padding: 0;
            border: none;
            cursor: pointer;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-color: transparent;
        }
        .color-input::-webkit-color-swatch-wrapper { padding: 0; }
        .color-input::-webkit-color-swatch { border: 2px solid #e5e7eb; border-radius: 0.5rem; }
        
        .loader, .gemini-loader {
            border: 4px solid #f3f3f3;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        .loader {
            border-top: 4px solid #3498db;
            width: 40px; height: 40px;
        }
        .gemini-loader {
             border-top: 4px solid #8e44ad;
             width: 24px; height: 24px;
             display: inline-block;
             margin-right: 8px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .suggestion-card {
            transition: all 0.3s ease-in-out;
            cursor: pointer;
        }
        .suggestion-card:hover, .suggestion-card.selected {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 0 0 3px #3b82f6, 0 10px 20px rgba(0,0,0,0.1);
        }
        .gemini-modal-overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background-color: rgba(0,0,0,0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 50;
        }
        .gemini-modal-content {
            background-color: white;
            padding: 2rem;
            border-radius: 1rem;
            width: 90%;
            max-width: 500px;
        }
    </style>