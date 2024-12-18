<template>
  <div class="content">
    <div class="hamburger">
      <img src="/public/hamburger.svg" alt="hamburger" />
    </div>
    <div class="info">
      <h1>
        Only the <br />
        <span>juiciest burgers!</span>
      </h1>
      <h2>Free shipping from <span>6$</span></h2>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 54%;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 51px;
  .hamburger {
    /* width: 30%; */
    img {
      /* width: 254px; */
      max-width: 100%;
      /* aspect-ratio: 5 / 5; */
    }
  }
  .info {
    h1 {
      font-weight: 800;
      /* font-size: 50px; */
      /* line-height: 60px; */
      font-size: calc(var(--index) * 1.8);
      line-height: calc(var(--index) * 2);
      color: #fff;
      padding-left: 58px;
      span {
        color: var(--orenge);
      }
    }
    h2 {
      font-weight: 400;
      font-size: 16px;
      color: #fff;
      padding-left: 58px;
      /* margin-top: 52px; */
      margin-top: 12%;
      span {
        font-weight: 600;
      }
    }
  }
}

@media (max-width: 1280px) {
  .content {
    .hamburger {
      img {
        width: 254px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .content {
    .hamburger {
      img {
        width: 220px;
      }
    }
  }
}

@media (max-width: 768px) {
  .content {
    .hamburger {
      img {
        width: 200px;
      }
    }
    .info {
      margin-top: 8px;
      h2 {
        margin-top: 26px;
        font-size: 16px;
      }
    }
  }
}

@media (max-width: 650px) {
  .content {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    .hamburger {
      width: 170px;
      margin-top: 27px;
      margin-left: auto;
      margin-right: auto;
    }
    .info {
      margin-top: 8px;
      text-align: center;
      h1{
        padding-left: 0;
      }
      h2 {
        margin-top: 5px;
        font-size: 16px;
        padding-left: 0;
      }
    }
  }
}

@media (max-width: 480px) {
  .content {
    .info {
      h1 {
        padding-left: 0;
      }
      h2{
        padding-left: 0;
      }
    }
  }
}

/* @media (max-width: 384px) {
  .content {
    padding-top: 30px;
    .hamburger {
      img {
        width: 60px;
      }
    }
    .info {
      h1 {
        font-size: 13px;
        line-height: 20px;
        padding-left: 20px;
      }
      h2 {
        font-size: 4px;
        padding-left: 20px;
        margin-top: 5px;
      }
    }
  }
} */
</style>
