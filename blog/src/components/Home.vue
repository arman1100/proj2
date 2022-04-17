<template>
<h1> Welcome To Home</h1>
<h2>Name: {{name}}</h2>
<h2>Mobile: {{mobile}}</h2>
<h2>Email: {{getEmail('abc@gmail.com')}}</h2>
<h3>Date: {{getDate()}}</h3>
<h4>{{currentDate}}</h4>

</template>

<script>

import { format } from 'date-fns'

export default {
    name: "Ho-me",
    data()
    {
        return {
            name: 'Arman',
            mobile: 9898,
            getEmail(x)
            {
                return x;
            },
            currentDate: format(new Date(), 'yyyy-MM-dd HH:mm:ss')
        }
    },
    methods: {
        getDate()
        {
            return 'April 17 2022';
        }
    }


}

</script>


<style scoped>

h1{
    color: orange;
}

</style>