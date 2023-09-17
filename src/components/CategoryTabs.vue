<template>
  <div class="tab-gallery container">
    <template v-for='tab in tabsArr' :key='tab.id'>
    <button type="button" class="tab" :class='{active: tab.isActive}' @click="chooseCurrentCategory(tab.category)">{{tab.category}}</button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'CategoryTabs',
data() {

    return{
        category:'general',
        tabsArr: [
            {id: '1',category: 'general', isActive:true },
            {id: '2',category: 'business', isActive:false },
            {id: '3',category: 'entertainment', isActive:false },
            {id: '4',category: 'health', isActive:false },
            {id: '5',category: 'science', isActive:false },
            {id: '6',category: 'sports', isActive:false },
            {id: '7',category: 'technology', isActive:false },
        ]
    }

},
emits: ['currentCategory'],
  methods: {
    chooseCurrentCategory(ref) {
        const prevActiveTab = this.tabsArr.find((item)=> item.isActive)
        prevActiveTab? prevActiveTab.isActive= false: null
        const currentActiveTab =  this.tabsArr.find((item) => item.category === ref)
        currentActiveTab.isActive = true
        this.category = currentActiveTab.category
        this.$emit('currentCategory', this.category)


    }
  }
};

</script>

<style lang="scss" scoped>
.tab {
  border: 1px solid rgb(25, 135, 84);
  border-radius: 20px;
  background: transparent;
  font-size: 18px;
  padding: 5px 20px;
  text-transform: capitalize;
  color: rgb(25, 135, 84);
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  &:hover,
  &:focus,
  &.active {
background-color: rgb(25, 135, 84);
color: white;

  }
}
.tab-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 20px;
}
</style>
