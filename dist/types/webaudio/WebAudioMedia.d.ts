import Filter from "../filters/Filter";
import WebAudioContext from "./WebAudioContext";
import WebAudioInstance from "./WebAudioInstance";
import WebAudioNodes from "./WebAudioNodes";
import Sound from "../Sound";
import { IMedia } from "../interfaces/IMedia";
import { LoadedCallback } from "../Sound";
export default class WebAudioMedia implements IMedia {
    parent: Sound;
    source: ArrayBuffer;
    private _nodes;
    private _source;
    init(parent: Sound): void;
    destroy(): void;
    create(): WebAudioInstance;
    readonly context: WebAudioContext;
    readonly isPlayable: boolean;
    filters: Filter[];
    readonly duration: number;
    buffer: AudioBuffer;
    readonly nodes: WebAudioNodes;
    load(callback?: LoadedCallback): void;
    private _loadUrl(callback?);
    private _decode(arrayBuffer, callback?);
}
