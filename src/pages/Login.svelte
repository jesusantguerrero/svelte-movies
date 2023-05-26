<main class="login-box">
     <h1> This is a login</h1>
    <form action="">
        <label>
            <span>User</span>
            <input type="text">
        </label>
        <label>
            <span>Password</span>
            <input type="text">
        </label>
        <button> Login </button>
    </form>
</main>

<style lang="scss">
    .login-box {
        background: white;
        height: 100vh;
        width: 50%;
        margin-left: auto;
        margin-right: auto;

        form label, form label span {
            display: block;
        }
    }
</style>