/**
 * Mnemonics helper for Wallet Seeds
 */
export declare class Mnemonics {
    /**
     * Encodes a wallet seed to a set of mnemonic words
     * @param seed The wallet seed
     * @param wordsetName The mnemonic language
     * @returns The mnemonic phrase
     */
    static encode(seed: string, wordsetName?: string): string;
    /**
     * Decodes a set of mnemonics words to a wallet seed
     * @param words The mnemonic phrase
     * @param wordsetName The mnemonic language
     * @returns The wallet seed
     */
    static decode(words: string, wordsetName?: string): string;
    /**
     * Generates random bits of data
     * @param bits The number of random bits to return
     * @returns The random bits in a hexadecimal representation
     */
    static random(bits: number): string;
    /**
     * Provides the full list of wordsets available with their words
     */
    static get words(): any;
    /**
     * Provides the list of mnemonic languages supported
     * @returns The mnemonic languages
     */
    static get languages(): string[];
}
