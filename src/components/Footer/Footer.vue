<template>
  <footer>
    <div class="content">
      <div class="logo">
        <img src="/public/logo 2.svg" alt="logo" />
        <div class="name">
          <h5>© YouMeal, 2022</h5>
        </div>
      </div>
      <div class="tell-number">
        <h1>Order number</h1>
        <div class="tell">
          <img src="/public/call.svg" alt="call" />
          <h2>+0(000)000-00-00</h2>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 244px;
  background: var(--white);
  margin-top: 100px;
  .content {
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 72%;
    .logo {
      img {
        padding-bottom: 43px;
      }
      .name {
        h5 {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
          gap: 4px;
          font-weight: 400;
          font-size: 12px;
          color: var(--black);
        }
      }
    }
    .tell-number {
      h1 {
        font-weight: 400;
        font-size: 24px;
        line-height: 24px;
        color: var(--black);
        margin-bottom: 24px;
      }
      .tell {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        gap: 4px;
      }
    }
  }
}

@media (max-width: 700px) {
  footer {
    .content {
      flex-direction: column;
      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .tell-number {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        h1 {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
