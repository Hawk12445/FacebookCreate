const firstName = document.querySelector("#firstName");
        const lastName = document.querySelector("#lastName");
        const gender = document.querySelector("#gender");
        const age = document.querySelector("#age");
        const profile = document.querySelector('#profile');
        const createBtn = document.querySelector("#createBtn");
        const errorMsg = document.querySelector("#errorMsg");


        profile.onchange = function() {
            if (this.files.length > 0) {
                const uploadBox = document.querySelector("#uploadBox");
                const label = document.querySelector("#uploadLabel");
                uploadBox.classList.add('border-blue-500/50', 'bg-blue-500/5');
                label.innerText = this.files[0].name;
                label.classList.replace('text-zinc-500', 'text-blue-400');
            }
        };

        const highlightError = (el) => {
            el.classList.add('error-ring');
        };

        createBtn.onclick = function() {
            // Reset states
            [firstName, lastName, gender, age].forEach(el => el.classList.remove('error-ring'));
            errorMsg.classList.add('hidden');

            let hasError = false;
            if (!firstName.value) { highlightError(firstName); hasError = true; }
            if (!lastName.value) { highlightError(lastName); hasError = true; }
            if (!gender.value) { highlightError(gender); hasError = true; }
            if (!age.value) { highlightError(age); hasError = true; }

            if (hasError) {
                errorMsg.classList.remove('hidden');
                return;
            }

            document.body.innerHTML = `
                <div class="fixed inset-0 bg-[#0b0b0d] flex flex-col items-center justify-center p-6 text-center">
                    <div class="w-full max-w-xl animate-in fade-in duration-500">
                        <img src="saging.jpeg" 
                             onerror="this.src='https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=800'"
                             class="w-full rounded-2xl shadow-2xl mb-6 grayscale hover:grayscale-0 transition-all duration-1000" 
                             alt="saging">
                        
                        <div class="bg-red-600 text-white font-black py-4 px-8 rounded-xl text-3xl mb-8 inline-block shadow-lg">
                            AASA AKO
                        </div>

                        <div class="bg-black rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                            <video controls autoplay class="w-full aspect-video">
                                <source src="Messenger_creation_F03DA41B-08E1-4FA8-B5B5-6A1AB3D0404A.mp4" type="video/mp4">
                                <div class="p-10 text-zinc-600">Video source not found.</div>
                            </video>
                        </div>

                        <button onclick="location.reload()" class="mt-8 text-zinc-500 hover:text-zinc-300 text-xs font-bold tracking-widest transition-colors uppercase underline underline-offset-4">
                            Try Again
                        </button>
                    </div>
                </div>
            `;
              }
