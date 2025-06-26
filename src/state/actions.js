export default state => {
    return {
        count: {
            add(value) {
                state.count += value;
            },
            subtract(value) {
                state.count -= value;
            },
            set(value) {
                state.count = value;
            },
            get() {
                return state.count;
            },
            getDoubled() {
                return state.count * 2;
            }
        }
    }
}