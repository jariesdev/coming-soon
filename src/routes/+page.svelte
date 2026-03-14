<script type="ts">
  import SubscriptionForm from '$lib/components/SubscriptionForm.svelte';
  import VisualSide from '$lib/components/VisualSide.svelte';
</script>

<svelte:head> 
    <title>Coming Soon</title>
    <meta name="description" content="Jaries.dev coming soon!">
    <meta name="author" content="jariesdev@gmail.com">
</svelte:head>

<main class="flex flex-col md:flex-row h-screen w-full bg-white overflow-hidden">
  
  <!-- Content Side (Removed social links) -->
  <section class="coming-soon flex flex-col justify-center basis-full md:basis-7/12 px-8 md:px-[10%] py-12 md:py-0">
    <div class="font-black text-2xl tracking-tighter mb-12 md:mb-24 text-indigo-950">Jaries Dev</div>
    
    <div>
      <h1 class="text-5xl md:text-7xl font-bold leading-none text-gray-900 mb-6 tracking-tighter">
        We're<br>Almost There
      </h1>
      <p class="text-gray-500 text-lg md:text-xl mb-10 leading-relaxed">
       Stay tuned! We are launching our new platform very soon. Enter your email to get early access.
      </p>
      
      <SubscriptionForm />
    </div>
  </section>

  <!-- Visual Side -->
  <VisualSide />

</main>