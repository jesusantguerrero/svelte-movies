<script>
    import svelteLogo from '../assets/svelte.svg'
    import viteLogo from '/vite.svg'
    import Counter from '../lib/Counter.svelte'
    import { authMock } from '../lib/authMock';
    import { navigateTo } from 'svelte-router-spa';


  const { logout } = authMock()
    const onLogout = () => {
        logout().then(() => {
            navigateTo("/");
        })
    }
</script>

<section>
  <h4>The users</h4>
</section>