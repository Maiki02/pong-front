export interface ResponseI {
    status: string;
    code: number,
    data?: any;
    message: string; 
}

export interface Game{
    id: string;
    player1: string;
    player2: string;
    status: string;
    positionPlayer1: number;
    positionPlayer2: number;
    winner: string;
    ballPositionX: number;
    ballPositionY: number;
    createdAt: string;
}