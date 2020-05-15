import React from 'react';
import HeaderSlide from "./components/HeaderSlide/HeaderSlide";

function App() {


    const games = [
        {
            headerImage: "https://beta.huz.com/space/light/4c3083d9-d50a-4331-b643-df107b06363c/?rsz%5Bh%5D=500",
            headerImageLow: "https://beta.huz.com/space/light/4c3083d9-d50a-4331-b643-df107b06363c/?rsz%5Bh%5D=200",
            provider: "Cartoon Network",
            title: "Adventure Time Bravery and Bakery",
            description: "What time is it? Pie time! Tree Trunks has opened her very own pie shop, and Finn and Jake are lending a hand.",
            playUrl: "/play"
        },
        {
            headerImage: "https://beta.huz.com/space/light/2cdc9348-3425-4858-866c-8627611b40e7/?rsz%5Bh%5D=500",
            headerImageLow: "https://beta.huz.com/space/light/2cdc9348-3425-4858-866c-8627611b40e7/?rsz%5Bh%5D=200",
            provider: "Huz Originals",
            title: "Checkers Legend",
            description: "Have you got what it takes to become a legend in this online version of the classic board game? Take on a series of virtual opponents while you master the easy, medium, and hard modes.",
            playUrl: "/play"
        }, {
            headerImage: "https://beta.huz.com/space/light/28fd0f63-7223-4fe3-974d-34cdfde042e5/?rsz%5Bh%5D=500",
            headerImageLow: "https://beta.huz.com/space/light/28fd0f63-7223-4fe3-974d-34cdfde042e5/?rsz%5Bh%5D=200",
            provider: "Huz Originals",
            title: "Checkers Legend",
            description: "Have you got what it takes to become a legend in this online version of the classic board game? Take on a series of virtual opponents while you master the easy, medium, and hard modes.",
            playUrl: "/play"
        }, {
            headerImage: "https://beta.huz.com/space/light/e80f4d47-99c4-433a-bfb4-83fefd90a737/?rsz%5Bh%5D=500",
            headerImageLow: "https://beta.huz.com/space/light/e80f4d47-99c4-433a-bfb4-83fefd90a737/?rsz%5Bh%5D=200",
            provider: "Huz Originals",
            title: "Amigo Pancho",
            description: "Fly your friend to freedom!",
            playUrl: "/play"
        }];

    return (
        <div className="App">
            {games.map((game, key) => <HeaderSlide  {...{game, key}}/>)}
        </div>
    );
}

export default App;
