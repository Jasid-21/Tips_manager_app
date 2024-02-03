import BehaviorsStore from "@/interfaces/BehaviorsStore.interface";
import { defineStore } from "pinia";

export const useBehaviorsStore = defineStore('behaviors', {
  state: (): BehaviorsStore => ({
    base_url: 'http://localhost:3000',
  })
});
