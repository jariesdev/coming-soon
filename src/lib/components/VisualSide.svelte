<script>
  // Importing the favicon from the lib folder
  import logo from '$lib/assets/favicon.png';
</script>

<div class="relative flex-1 min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1e004a] to-[#4a00e0]">
  
  <!-- Subtle Grid Overlay -->
  <div class="absolute inset-0 opacity-10 rotate-[-15deg] scale-150" 
       style="background-image: radial-gradient(white 1px, transparent 1px); background-size: 40px 40px;">
  </div>

  <!-- Rotating Abstract Shape -->
  <div class="rotating-logo absolute w-72 h-72 md:w-96 md:h-96 bg-white/5 backdrop-blur-xl border border-white/20 animate-[spin_25s_linear_infinite] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-2xl">
  </div>

  <!-- Static Logo Overlay -->
  <div class="relative z-10 flex flex-col items-center gap-4 text-white drop-shadow-2xl">
     <div class="w-20 h-20 md:w-24 md:h-24 p-4 border-2 border-white/30 rounded-3xl flex items-center justify-center bg-white/10 backdrop-blur-md">
      <img src={logo} alt="Logo" class="w-full h-full object-contain" />
    </div>
  </div>
</div>
