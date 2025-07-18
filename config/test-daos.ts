export const testDaos = {
  ERC20: {
    network: 'sep',
    address: '0xB4b01b4Dc5f8d11feD90D760a237BF4D74C3423d',
    get value(): string { return `${this.network}:${this.address}`; }
  },
  ERC721: {
    network: 'sep',
    address: '0x0BB34D2e76099c72dD26665afE5710980E271382',
    get value(): string { return `${this.network}:${this.address}`; }
  },
  multisig: {
    network: 'sep',
    address: '0x0B17fd112dc1B25892e7E85D486dD390A037936A',
    get value(): string { return `${this.network}:${this.address}`; }
  }
};

/**
 * Returns the test DAO configuration for the specified governance type.
 * @param governanceType Optional. One of 'erc20', 'erc721', or 'multisig'.
 *                      If not provided, uses process.env.GOVERNANCE_TYPE or defaults to 'erc20'.
 * @throws {Error} If an unknown governance type is provided.
 */
export function getTestDao(governanceType?: string) {
  const type = (governanceType || 'erc20').toLowerCase();
  if (type === 'erc20') return testDaos.ERC20;
  if (type === 'erc721') return testDaos.ERC721;
  if (type === 'multisig') return testDaos.multisig;
  throw new Error(`Unknown governance type: ${governanceType}`);
}
