## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!


### SmartBackground Props
You can configure SmartBackground component :

| Prop | Type | Default | Description |
| ---- | ---- | ----| ---- |
| image | String | -- | Url of background image (required)| 
| lowImage | String | -- | Low res image url for blurred image (optional)
| blur | number | 30 | Blur radius for blurred image |
| edge | number | 100 | Blur image and original image negative distance for fade effect. |
| fill | String | -- | Blur background value for alternative image or color. Ex: `url(sample.jpg)` or `#000000` (optional)|
| alt | String | -- | Original image alt value (optional)|
| direction | String | auto | Position of original image (left,right,top,bottom or auto). Auto is uses responsive breakpoint width: 576px |
| className | String | -- | html class value for customize (optional)|
| style | Object | -- | html style value for customize (optional)|

