
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import ToastService from 'primevue/toastservice'
import { definePreset } from "@primeuix/themes";
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: "{blue.50}",
            100: "{blue.100}",
            200: "{blue.200}",
            300: "{blue.300}",
            400: "{blue.400}",
            500: "{blue.500}",
            600: "#2563eb",
            700: "#1d4ed8",
            800: "#1e40af",
            900: "{blue.900}",
            950: "{blue.950}",
        },
        surface: {
            50: "{slate.50}",
            100: "{slate.100}",
            200: "{slate.200}",
            300: "{slate.300}",
            400: "{slate.400}",
            500: "{slate.500}",
            600: "{slate.600}",
            700: "{slate.700}",
            800: "{slate.800}",
            900: "{slate.900}",
            950: "{slate.950}",
        },

        colorScheme: {
            light: {
                primary: {
                    color: "{primary.600}",
                    inverseColor: "#ffffff",
                    hoverColor: "{primary.700}",
                    activeColor: "{primary.800}",
                },

                highlight: {
                    background: "{primary.50}",

                    focusBackground: "{primary.200}",
                    color: "{primary.600}",
                    focusColor: "{primary.800}",
                },
            },

            dark: {
                surface: {
                    0: "{slate.0}",
                    50: "{slate.50}",
                    100: "{slate.100}",
                    200: "{slate.200}",
                    300: "{slate.300}",
                    400: "{slate.400}",
                    500: "{slate.500}",
                    600: "{slate.600}",
                    700: "{slate.700}",
                    800: "{slate.700}",
                    900: "{slate.800}",
                    950: "{slate.900}",
                },
                primary: {
                    color: "{primary.500}",
                    inverseColor: "#ffffff",
                    hoverColor: "{primary.400}",
                    activeColor: "{primary.800}",
                },
                highlight: {
                    background: "{primary.500}",
                    focusBackground: "{primary.700}",
                    color: "{slate.200}",
                    focusColor: "{primary.800}",
                },
            },
        },
    },
});

app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
     options: {
        prefix: "p",
        darkModeSelector: ".dark",
        cssLayer: {
            name: "primevue",
            order: "theme, base, primevue",
        },
    },
    license: 'eyJpZCI6IjA4NjIzNzFmLTAzYjItNDQ4OC04ZTQ5LTQzMjBiY2U0YTAyMyIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODU1OTA5NDAsImV4cCI6MTgxNzEyNjk0MH0.xbDn5Q3Ikf-0SQGGTcqn3T6HCbWVJZXi6Iy82M7svaYuSIBlinZB5Fe6SAYzm6bzw4qlXXgPUc6__ys1twzWAQ',
    ripple: true,
  },
  
})

app.use(ToastService)
app.use(router)

app.mount('#app')