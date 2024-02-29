import { defineStore } from "pinia";
import { type Ref } from "vue";

export const useHomeStore = defineStore(
  "home",
  (): {
    count: Ref<number>;
    addCount: () => void;
  } => {
    const count = ref(0);

    const addCount = () => {
      count.value++;
    };

    return {
      count,
      addCount,
    };
  }
);
