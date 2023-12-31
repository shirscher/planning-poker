const game = {
    init: () => {
    },

    state: {},
    ui: {}
};

const gameSettings = {
    "cardCollections": [
        {
            "name": "Fibonacci",
            "values": [
                {
                    "value": "1",
                },
                {
                    "value": "2",
                },
                {
                    "value": "3",
                },
                {
                    "value": "5",
                },
                {
                    "value": "8",
                },
                {
                    "value": "13",
                },
                {
                    "value": "21",
                },
                {
                    "value": "100",
                },
                {
                    "value": "infinity",
                    "html": "∞"
                },
                {
                    "value": "coffee",
                    "html": "☕"
                }
            ]
        }
        
    ],
    "selectedCardCollection": 0,
    "enableAutoReveal": false,
    "enableConsensusAnimation": true
};

const events = [
    {
        "type": "board-revealed",
        "playerId": 1
    },
    {
        "type": "board-reset",
        "playerId": 2
    },
    {
        "type": "card-played",
        "playerId": 1,
        "card": 3
    },
    {
        "type": "card-withdrawn",
        "playerId": 1
    },
    {
        "type": "player-joined",
        "playerId": 1,
        "name": "Player 1"
    },
    {
        "type": "player-left",
        "playerId": 1
    },
    {
        "type": "player-renamed",
        "playerId": 1,
        "name": "Player 1"
    },
    {
        "type": "room-renamed",
        "playerId": 1,
        "name": "Room 1"
    },
    {
        "type": "player-entered-spectate-mode",
        "playerId": 1
    },
    {
        "type": "player-exited-spectate-mode",
        "playerId": 1
    },
    {
        "type": "game-state-refreshed",
        "playerId": 1,
        "state": {

        }
    }
];