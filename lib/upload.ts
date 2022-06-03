import axios from 'axios'
import image from '../public/pedido-pago-logo.png'

export const upload = async () => {
  const url = await axios.get()
  console.log('url: ', url.data)

  try {
    await axios.put(url.data.url, image, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'image/png',
      },
    })
  } catch (e) {
    console.error(e)
  }
  console.log(JSON.stringify({ objectName: url.data.fileName }, null, 2))
}
