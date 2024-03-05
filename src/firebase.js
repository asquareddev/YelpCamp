// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDI5jKFl9uG5sCf\nCr4yYnlMj7ydvGOgIGx/4clJ8RIQY5XqXHuApGo6Ya8enQy3OrNWs+uYqmROhv6i\noL4zjebsZIHHfSnsEtUfvwWyFIIJbjo06vpssO99I2EtqYK3cCsA5d4V9IX2lU0+\nD18ARd7+lJD0kMsKi6XKatwZSz5Gd2/LitA5FQLhw0nV8s2cx5mbQ0P1ukR67OQ9\nErcSczjA9D18DmrUJK+b+QmizPnqZBOQ90sby/hMSk8efubIFpOud4aH4UjlGNFs\nWj6s7uRflceVNcf0J2QLzgU7TXtUbqoalEk8ziiI/rEWUg/POAtjaXnL7GJC3F3w\n9WUAoUFBAgMBAAECggEABVPlfxl53uf7r7wPMzLdWKRvMheu5K43cmTAe8+C1SBu\n91oghFbX4lh41mz/y1QpMWFwHApYwqRd2F4+7QsUVqyLrIirNfGB6WeddQ2KLUnZ\nDVI19e/zSfRIPXfDWa4F1e5Cp35mlxV6iOzLbixsL4AtH+8/EzaE3QtcbudJ7YBt\nR7R0l0zHy+NksHj491aL1gTBPL59Ksf+MWiUMw3Iq1DmUGYCm1txY/p29Pm1kKuH\n8+AxZn0wRDuxl308G5mtXTmoFRyYTgChPSn4ZSe1E5oDK1vKJxS7f1YCaZJefbHG\n0dQdkuQIwuL64PVqC3QnJYerffFBD5N9CHugZpxV4QKBgQD5GWslT0MfARyySLMP\n49kVoHIn4TR8rkUPUoYCrBJqjPILnRJHI3vlbocpwin4LDv34X7H1qwhafOp7EbF\nbYVWXOZSQeWwtI18l31wIUCeJanOOC3UHP5Ab6FpqroBbykm6TU5fg99Q+Ss8nik\nr44aX1Xnsu7rZm17pVpgcSYgjQKBgQDOdvMkBshNPifVJCEvrvzHEDwn8AiXmAwk\n1rLDxdQIE19XF8sW0jxFG37+TYmXok25YRaFO1DsxOKaHz5gRfpEQYJIMUL4ukaC\nOpzyBoKkAhVl3aBUCyxLXq1hl4f6U/+eWnn1FWmVVaMJKDmaIWb7FCiheTYsNQY2\n2OmLJ2G4hQKBgQDpcIm50Dr9zkP/TCQKqyNgohj5CJLwmTx87IBL9sfXdLjMa2ma\no0VTsK4YUy6TtZiJZ5gxXRu4wJspzhRQpp+DXNI3mivP2pSRg0J5l5//1Rn5+Snx\nky4uYq7o4Kcp+uuc3IYVl+6aHMsrzJuE8kSAsIFH/qbqkfXeHwrAQKlTbQKBgEh2\n41uvrbm+qQhcB/HOfxX3EsYJr1pVmV2MpW2lD4hOFFZjGXrHCzRONEJZQIOiCZmZ\nA+h7KyoO6GGjuabcqLwwKePgtlrKNlka7V7c/hlGSfBY2x7kVQWXE09/edBYjw0r\nQEbO3yH0zqY2IhGAy74wExqpimP1sFqrwzx99ARpAoGAV3frZeh6HTtk/969TJMU\nCw2GXO5vjk3LNsVR2YeCix8zQt4OPvW7OYTivLz7ET80JLLnUdSww/M9qdlMZgwi\nAivPf3G7YM7MXeoopIWVmhWcg+MFinwaaEwxQnHUgEGG3q2hTP7/D0tLp1c0q0Kj\n+dFKsvS35+DBedBYzvAxAdk=\n-----END PRIVATE KEY-----\n",
  authDomain: "https://accounts.google.com/o/oauth2/auth",
  projectId: "test-671ca",
  storageBucket: "todoapp-eeeb7.appspot.com",
  messagingSenderId: "1072574112522",
  appId: "1:1072574112522:web:65fc4e184aed9894dc90f3"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;