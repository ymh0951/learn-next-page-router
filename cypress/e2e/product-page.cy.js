describe('상품 목록 페이지', () => {
    // 첫 번째 테스트 시나리오
    it('페이지에 진입하면 상품 목록이 표시된다', () => {
        cy.visit('/');
        cy.getByCy('product-item').should('be.visible');
    });

    // 두 번째 테스트 시나리오
})