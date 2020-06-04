<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-md-offset-3">
        <br />
        <button @click="selectedComponent = 'memory1'" class="btn-sm btn btn-primary">memory1</button>
        <button @click="selectedComponent = 'memory2'" class="btn-sm btn btn-primary">memory2</button>
        <button @click="selectedComponent = 'memory3'" class="btn-sm btn btn-primary">memory3</button>
        <hr />
        <p>{{selectedComponent}}</p>
        <hr />
        <keep-alive>
          <component :is="selectedComponent">
            <h1 class="text-center">Bir Gün</h1>
            <h4 class="text-center">Çok güzel bir anıydı..</h4>
          </component>
        </keep-alive>

        <memory1 content="Volkan Gürenekli">
          <h1 slot="heading" class="text-center">Bir Gün</h1>
          <h4 slot="paragraph" class="text-center">Çok güzel bir anıydı..</h4>
        </memory1>
      </div>
    </div>
  </div>
</template>

<script>
import Memory1 from "./components/Memory1";
import Memory2 from "./components/Memory2";
import Memory3 from "./components/Memory3";

export default {
  data: () => {
    return {
      selectedComponent: "memory1"
    };
  },
  components: {
    memory1: Memory1,
    memory2: Memory2,
    memory3: Memory3
  }
};
</script>
