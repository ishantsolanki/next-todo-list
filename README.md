This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

Once cloned, run `yarn` to install the dependencies

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn serve`

Run this command in a separate terminal keeping the client running.

The project is in no terms complete and only demonstrates a possible way of updating data in realtime.

I initially used redux but ended up not using it as it didnt turn out to be an optimal way to handle serverside live sync.

Hence, I reimplemented to using swr for achieving the same in considerably less amount of code.

### Next steps

Update the UI every time data changes. Currently it doesnt happen as you expect and would require refreshes.
Update the UI. I didnt spend much time beautifying this thing.
Unit tests. Since change of approach, I couldnt contribute much time in writing them.
I would go on to add an offline mode if given more time. This is a perfect candidate for it.
Also port it to react native.
