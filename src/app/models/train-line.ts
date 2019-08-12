import { Station } from './station';

export class TrainLine {
    public name: string;
    public color: string;
    public path: number[][];
    public stations: Station[];
}