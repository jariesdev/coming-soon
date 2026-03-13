<script>
  let email = '';
  let submitted = false;
  let error = '';

  const validateEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleSubmit = () => {
    error = '';
    if (!validateEmail(email)) {
      error = 'Please enter a valid email address.';
      return;
    }
    submitted = true;
  };
</script>

<div class="w-full mb-10 md:mb-0 min-h-[110px]">
  {#if !submitted}
    <form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-3">
      <div class="flex flex-col sm:flex-row gap-2">
        <input 
          type="email" 
          bind:value={email} 
          placeholder="Enter your email" 
          class="flex-1 px-5 py-4 border rounded-lg outline-none transition-all 
                 {error ? 'border-red-500 ring-2 ring-red-100' : 'border-gray-200 focus:border-indigo-600'}"
        />
        <button type="submit" class="px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 active:scale-95 transition-all uppercase text-sm tracking-widest">
          Notify Me
        </button>
      </div>
      {#if error}
        <p class="text-red-600 text-sm font-semibold">{error}</p>
      {/if}
    </form>
  {:else}
    <div class="p-6 bg-emerald-50 border-l-4 border-emerald-500 rounded-lg">
      <h3 class="text-emerald-900 font-bold text-lg">🎉 You're on the list!</h3>
      <p class="text-emerald-700 text-sm">We'll update <strong>{email}</strong> soon.</p>
    </div>
  {/if}
</div>
