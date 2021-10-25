<template>
  <div class="home__milestones__grid-content">
    <div class="home__milestones__grid side-1">
      <h4>1989</h4>
      <h4>Founded timbuk2</h4>
    </div>
    <div class="home__milestones__grid side-2">
      <h4>1995</h4>
      <h4>Set up mass customization factories for Nike, Reebok and Timberland</h4>
    </div>
     <img src="../static/img/dots.svg" alt="" class="dot-line">
    <div class="home__milestones__grid side-3">
      <h4>2005</h4>
      <h4>Led product development at CafePress and Zazzle</h4>
    </div>
    <div class="home__milestones__grid side-4">
      <h4>2010</h4>
      <h4>Founded SKYOU to bring big brand quality to any brand</h4>
    </div>      
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
.home__milestones {
  &__grid-content {
      display: grid;
      grid-template-columns: 400px 10px 400px;
      justify-content: center;
      padding: var(--f-gutter) 0;
      gap: var(--f-gutter);
      @include respond-to("<=m") {
        grid-template-columns: 1fr 10px 1fr;
        gap: 0;
      }
    .side-1 {
      grid-column: 1 / 2;
    }
    .side-2 {
      grid-column: 3 / 4;
      grid-row: 2 / 3;     
    }
    .side-3 {
      grid-column: 1 / 2;
      grid-row: 3 / 4;    
    }
    .side-4 {
      grid-column: 3 / 4;
      grid-row: 4 / 5;    
    }    
    .dot-line {
      grid-column: 2 / 3;
      grid-row: 1 / 5;
      .line {
        width: 5px;
        height: 100%;
        color: #C8CED0;
      }
      .dot {
        width: 10px;
        height: 10px;
        border-radius: 1px solid #C8CED0;
      }
    }
  }
  &__grid {
    background-color: var(--color-neutral-09);
    padding: var(--f-gutter);
    border-radius: 4px;
    height: max-content;
    h4 {
      margin-bottom: 0;
    }
    h4:nth-of-type(1) {
      color: var(--color-neutral-04);
    }
  }
}
</style>